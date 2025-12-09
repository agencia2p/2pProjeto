import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Nome completo é obrigatório" }).max(100, { message: "Nome deve ter menos de 100 caracteres" }),
  email: z.string().trim().email({ message: "E-mail inválido" }).max(255, { message: "E-mail deve ter menos de 255 caracteres" }),
  phone: z.string().trim().min(1, { message: "Telefone é obrigatório" }).max(20, { message: "Telefone deve ter menos de 20 caracteres" }),
  company: z.string().trim().min(1, { message: "Empresa é obrigatória" }).max(100, { message: "Empresa deve ter menos de 100 caracteres" }),
  position: z.string().trim().min(1, { message: "Cargo é obrigatório" }).max(100, { message: "Cargo deve ter menos de 100 caracteres" }),
  hasStore: z.string().min(1, { message: "Selecione uma opção" }),
  storeUrl: z.string().trim().max(500, { message: "URL deve ter menos de 500 caracteres" }).optional(),
  message: z.string().trim().min(1, { message: "Descrição é obrigatória" }).max(1000, { message: "Descrição deve ter menos de 1000 caracteres" }),
  newsletter: z.boolean()
});

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    hasStore: '',
    storeUrl: '',
    message: '',
    newsletter: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Endpoint Formspree (substituído conforme você enviou)
  const FORMSPREE_URL = 'https://formspree.io/f/mldqnkqk';
  // Número do WhatsApp (se quiser trocar, altere aqui, sem sinais, com DDI+DDD)
  const WHATS_NUMBER = '5519982752079';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // validação com Zod
      contactSchema.parse(formData);

      setLoading(true);

      // payload a ser enviado ao Formspree
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        position: formData.position,
        hasStore: formData.hasStore,
        storeUrl: formData.storeUrl,
        newsletter: formData.newsletter ? 'Sim' : 'Não',
        message: formData.message
      };

      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        let errText = '';
        try {
          const j = await res.json();
          errText = JSON.stringify(j);
        } catch {
          errText = await res.text();
        }
        console.error('Formspree respondendo com erro:', errText);
        throw new Error('Falha ao enviar o formulário. Tente novamente mais tarde.');
      }

      // mensagem WhatsApp (abrir após envio bem-sucedido)
      const whatsappMessage = encodeURIComponent(
        `Olá! Meu nome é ${formData.name}.\n\n` +
        `E-mail: ${formData.email}\n` +
        `Telefone: ${formData.phone}\n` +
        `Empresa: ${formData.company}\n` +
        `Cargo: ${formData.position}\n` +
        `Tem loja virtual: ${formData.hasStore}\n` +
        (formData.storeUrl ? `URL da Loja: ${formData.storeUrl}\n` : '') +
        `Newsletter: ${formData.newsletter ? 'Sim' : 'Não'}\n\n` +
        `Mensagem: ${formData.message}`
      );

      window.open(`https://wa.me/${WHATS_NUMBER}?text=${whatsappMessage}`, '_blank');

      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato! Recebemos sua mensagem.",
      });

      // resetar formulário
      setFormData({ name: '', email: '', phone: '', company: '', position: '', hasStore: '', storeUrl: '', message: '', newsletter: false });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            newErrors[issue.path[0].toString()] = issue.message;
          }
        });
        setErrors(newErrors);
      } else {
        console.error('Erro no envio do formulário:', error);
        toast({
          title: "Erro ao enviar",
          description: "Ocorreu um problema ao enviar sua mensagem. Tente novamente mais tarde.",
          variant: 'destructive'
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, hasStore: value });
    if (errors.hasStore) {
      setErrors({ ...errors, hasStore: '' });
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({ ...formData, newsletter: checked });
  };

  return (
    <section id="contato" className="py-20 px-4 bg-[var(--gradient-subtle)]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Vamos <span className="text-primary">crescer juntos?</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Preencha o formulário e fale com a gente!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 mb-12 max-w-4xl mx-auto">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Nome Completo *"
                value={formData.name}
                onChange={handleChange}
                className={`bg-input border-border ${errors.name ? 'border-destructive' : ''}`}
              />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <Input
                type="email"
                name="email"
                placeholder="E-mail *"
                value={formData.email}
                onChange={handleChange}
                className={`bg-input border-border ${errors.email ? 'border-destructive' : ''}`}
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <Input
                type="tel"
                name="phone"
                placeholder="Telefone *"
                value={formData.phone}
                onChange={handleChange}
                className={`bg-input border-border ${errors.phone ? 'border-destructive' : ''}`}
              />
              {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <Input
                type="text"
                name="company"
                placeholder="Empresa *"
                value={formData.company}
                onChange={handleChange}
                className={`bg-input border-border ${errors.company ? 'border-destructive' : ''}`}
              />
              {errors.company && <p className="text-destructive text-sm mt-1">{errors.company}</p>}
            </div>

            <div>
              <Input
                type="text"
                name="position"
                placeholder="Cargo *"
                value={formData.position}
                onChange={handleChange}
                className={`bg-input border-border ${errors.position ? 'border-destructive' : ''}`}
              />
              {errors.position && <p className="text-destructive text-sm mt-1">{errors.position}</p>}
            </div>

            <div>
              <Select value={formData.hasStore} onValueChange={handleSelectChange}>
                <SelectTrigger className={`bg-input border-border ${errors.hasStore ? 'border-destructive' : ''}`}>
                  <SelectValue placeholder="Você tem loja virtual? *" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Sim">Sim</SelectItem>
                  <SelectItem value="Sim, Gostaria de Migrar">Sim, Gostaria de Migrar</SelectItem>
                  <SelectItem value="Não">Não</SelectItem>
                </SelectContent>
              </Select>
              {errors.hasStore && <p className="text-destructive text-sm mt-1">{errors.hasStore}</p>}
            </div>

            <div>
              <Input
                type="url"
                name="storeUrl"
                placeholder="URL da Loja"
                value={formData.storeUrl}
                onChange={handleChange}
                className="bg-input border-border"
              />
            </div>
            
            <div> 
              <Textarea
                name="message"
                placeholder="Descreva um pouco o que você precisa?"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`bg-input border-border resize-none ${errors.message ? 'border-destructive' : ''}`}
              />
              {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="newsletter" 
                checked={formData.newsletter}
                onCheckedChange={handleCheckboxChange}
              />
              <label
                htmlFor="newsletter"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Aceita receber e-mails com novidades?
              </label>
            </div>
            
            <Button type="submit" variant="hero" className="w-full" size="lg" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
        </form>
      </div>
    </section>
  );
}
