import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const formSchema = z.object({
  fullName: z.string().min(3, "Por favor, ingresa tu nombre completo"),
  email: z.string().email("Correo electrónico no válido"),
  birthdayDay: z.string().min(1, "El día es obligatorio"),
  birthdayMonth: z.string().min(1, "El mes es obligatorio"),
  phone: z.string().regex(/^9\d{8}$/, "Debe ser un número de celular de Perú (9 dígitos)"),
  hasChildren: z.enum(["yes", "no"], {
    required_error: "Por favor, selecciona una opción",
  }),
  dataAuth: z.boolean().refine((val) => val === true, {
    message: "Debes autorizar el uso de datos para recibir el descuento",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const PromoFeria = () => {
  const navigate = useNavigate();
  const [errorModal, setErrorModal] = useState<{ open: boolean; message: string }>({
    open: false,
    message: "",
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      birthdayDay: "",
      birthdayMonth: "",
      phone: "",
      hasChildren: undefined,
      dataAuth: false,
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      // 1. Validar duplicados de forma EXPLÍCITA
      const { data: existingEmail, error: emailError } = await supabase
        .from("ocreamy_feria_leads")
        .select("email")
        .eq("email", values.email)
        .maybeSingle();

      if (emailError) throw emailError;
      if (existingEmail) {
        setErrorModal({
          open: true,
          message: "Este correo ya tiene un descuento activo. ¡Revisa tu bandeja de entrada o intenta con otro!",
        });
        return;
      }

      const { data: existingPhone, error: phoneError } = await supabase
        .from("ocreamy_feria_leads")
        .select("phone")
        .eq("phone", values.phone)
        .maybeSingle();

      if (phoneError) throw phoneError;
      if (existingPhone) {
        setErrorModal({
          open: true,
          message: "Este número de teléfono ya ha sido registrado anteriormente. Por favor, verifica tus datos.",
        });
        return;
      }

      // 2. Si no hay duplicados, proceder con el registro
      const couponCode = `OBLEA-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

      const { error: insertError } = await supabase.from("ocreamy_feria_leads").insert([
        {
          full_name: values.fullName,
          email: values.email,
          birthday_day: parseInt(values.birthdayDay),
          birthday_month: parseInt(values.birthdayMonth),
          phone: values.phone,
          has_children: values.hasChildren === "yes",
          data_auth: values.dataAuth,
          coupon_code: couponCode,
        },
      ]);

      if (insertError) {
        // Código 23505 = Unique Violation (Duplicado)
        if (insertError.code === "23505") {
          const isEmail = insertError.message.includes("email");
          setErrorModal({
            open: true,
            message: isEmail 
              ? "Este correo ya tiene un descuento activo. ¡Revisa tu bandeja de entrada!"
              : "Este número de teléfono ya ha sido registrado anteriormente.",
          });
          return;
        }
        throw insertError;
      }

      toast.success("¡Registro exitoso!");
      navigate("/promo-success", { state: { couponCode, fullName: values.fullName } });
    } catch (error) {
      console.error("Error saving lead:", error);
      toast.error("Hubo un error al procesar tu registro. Por favor, intenta de nuevo.");
    }
  };

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const months = [
    { value: "1", label: "Enero" },
    { value: "2", label: "Febrero" },
    { value: "3", label: "Marzo" },
    { value: "4", label: "Abril" },
    { value: "5", label: "Mayo" },
    { value: "6", label: "Junio" },
    { value: "7", label: "Julio" },
    { value: "8", label: "Agosto" },
    { value: "9", label: "Septiembre" },
    { value: "10", label: "Octubre" },
    { value: "11", label: "Noviembre" },
    { value: "12", label: "Diciembre" },
  ];

  return (
    <div className="min-h-screen bg-ocreamy-cream flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-12 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-ocreamy-red/10">
          <div className="bg-ocreamy-red p-8 text-white text-center">
            <h1 className="text-3xl font-bold mb-2">¡Promoción Feria! 🎡</h1>
            <p className="text-white/90">
              Regístrate y obtén un descuento de hasta el 20% en las Obleas Especiales favoritas.
            </p>
          </div>

          <div className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-ocreamy-brown font-semibold">Nombres y Apellidos</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej: Juan Pérez" {...field} className="rounded-xl border-ocreamy-cream-pink focus-visible:ring-ocreamy-red" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-ocreamy-brown font-semibold">Correo Electrónico</FormLabel>
                      <FormControl>
                        <Input placeholder="juan@ejemplo.com" {...field} type="email" className="rounded-xl border-ocreamy-cream-pink focus-visible:ring-ocreamy-red" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="birthdayDay"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-ocreamy-brown font-semibold">Día de Nacimiento</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-xl border-ocreamy-cream-pink">
                              <SelectValue placeholder="Día" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {days.map((day) => (
                              <SelectItem key={day} value={day}>{day}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="birthdayMonth"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-ocreamy-brown font-semibold">Mes de Nacimiento</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-xl border-ocreamy-cream-pink">
                              <SelectValue placeholder="Mes" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {months.map((month) => (
                              <SelectItem key={month.value} value={month.value}>{month.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-ocreamy-brown font-semibold">Número de Teléfono (Celular)</FormLabel>
                      <FormControl>
                        <Input placeholder="912345678" {...field} className="rounded-xl border-ocreamy-cream-pink focus-visible:ring-ocreamy-red" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="hasChildren"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-ocreamy-brown font-semibold">¿Tienes hijos?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="r1" />
                            <Label htmlFor="r1">Sí</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="r2" />
                            <Label htmlFor="r2">No</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dataAuth"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-xl border border-ocreamy-cream-pink p-4 bg-ocreamy-cream-pink/10">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-xs text-ocreamy-brown">
                          Autorizo el uso de mis datos para envío de promociones, publicidad y comunicaciones por parte de O'Creamy.
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-ocreamy-red hover:bg-ocreamy-red/90 text-white font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  ¡Quiero mi descuento! 🍦
                </Button>

                <p className="text-[10px] text-ocreamy-brown/60 text-center leading-tight">
                  Válido un (01) descuento por persona. Indispensable presentar el código de registro enviado al correo electrónico, al momento de la compra en caja.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </main>
      <Footer />

      <Dialog open={errorModal.open} onOpenChange={(open) => setErrorModal({ ...errorModal, open })}>
        <DialogContent className="sm:max-w-md rounded-2xl border-ocreamy-red/20">
          <DialogHeader>
            <DialogTitle className="text-ocreamy-brown text-xl font-bold flex items-center gap-2">
              <span className="text-ocreamy-red">⚠️</span> Aviso de Registro
            </DialogTitle>
            <DialogDescription className="text-ocreamy-brown/80 pt-4 text-base">
              {errorModal.message}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-6">
            <Button 
              onClick={() => setErrorModal({ ...errorModal, open: false })}
              className="w-full bg-ocreamy-red hover:bg-ocreamy-red/90 text-white rounded-xl font-bold"
            >
              Entendido
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PromoFeria;
