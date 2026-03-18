export default function PrivacyPage() {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-foreground mb-8">Política de Privacidade</h1>
        <div className="prose prose-sm text-foreground/80 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-foreground">1. Dados Coletados</h2>
            <p className="text-muted-foreground">Coletamos informações como nome, email e dados de pagamento necessários para fornecer nossos serviços.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">2. Uso dos Dados</h2>
            <p className="text-muted-foreground">Seus dados são utilizados para gerenciar sua conta, processar pagamentos, enviar comunicações e melhorar nossos serviços.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">3. Proteção</h2>
            <p className="text-muted-foreground">Utilizamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">4. Seus Direitos</h2>
            <p className="text-muted-foreground">Você tem direito a acessar, corrigir, excluir seus dados pessoais e revogar consentimentos a qualquer momento.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">5. Contato</h2>
            <p className="text-muted-foreground">Para questões sobre privacidade, entre em contato através do email privacidade@arsenal.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
