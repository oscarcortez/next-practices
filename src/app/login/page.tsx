'use client';

import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton"

const formSchema = z.object({
  email: z.string().min(2, {
    message: 'email must be at least 2 characters.',
  }),
  password: z.string().min(8, {
    message: 'password must be at least 8 characters.',
  }),
});

type LoginLabel = {
  field: string;
  en_value: string;
  es_value: string;
  da_value: string;
};

export type Language = "en" | "es" | "da";

export default function Page() {
  const [loginLabels, setLoginLabels] = useState<LoginLabel[]>([]);
  const [lang, setLang] = useState<Language>("en");
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const fetchLoginLabels = async () => {
      try {
        const { data: dataLang, error: errorLang } = await supabase
          .from('language')
          .select('value')
          .eq('is_active', true)
          .single();
        const { data: datalabels, error: errorLabels } = await supabase.from('login_labels')
          .select('field, en_value, es_value, da_value');
        if (errorLabels) throw errorLabels;
        if (errorLang) throw errorLang;
        setLoginLabels(datalabels);
        setLang(dataLang.value)
        console.log(dataLang)
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoginLabels();
  }, []);

  const getLabel = (field: string) => {
    const key = `${lang}_value` as keyof LoginLabel;
    const label = loginLabels.find((label) => label.field === field);
    return label ? label[key] : '';
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  if (loading) return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 h-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Skeleton className="h-10 w-40 mx-auto" />
        <Skeleton className="mt-10 h-8 w-full" />
        <Skeleton className="mt-4 h-8 w-full" />
        <Skeleton className="mt-4 h-8 w-full" />
        <Skeleton className="mt-4 h-8 w-full" />
        <Skeleton className="mt-4 h-8 w-full" />
      </div>
    </div>
  );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex items-center min-h-full flex-col justify-center px-6 py-12 lg:px-8 h-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          width={0}
          height={0}
          className="mx-auto h-10 w-auto"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          {getLabel('mainTitle')}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{getLabel('email')}</FormLabel>
                  <FormControl>
                    <Input placeholder={getLabel('emailPlaceholder')} {...field} />
                  </FormControl>
                  {/* <FormDescription>This is your public display name.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{getLabel('password')}</FormLabel>
                  <FormControl>
                    <Input placeholder={getLabel('passwordPlaceholder')} {...field} />
                  </FormControl>
                  {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="default" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              {getLabel('submitSignIn')}
            </Button>
          </form>
        </Form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          {getLabel('notMemberQuestion')}{' '}
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            {getLabel('createAccount')}
          </a>
        </p>
      </div>
    </div>
  );
}
