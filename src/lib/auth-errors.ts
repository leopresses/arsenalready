/**
 * Traduz mensagens de erro vindas do Supabase Auth (em inglês)
 * para português, mantendo um fallback amigável.
 */
export function translateAuthError(message: string | null | undefined): string {
  if (!message) return "Ocorreu um erro. Tente novamente.";
  const m = message.toLowerCase();

  if (m.includes("invalid login credentials") || m.includes("invalid_credentials")) {
    return "Email ou senha incorretos.";
  }
  if (m.includes("email not confirmed")) {
    return "Confirme seu email antes de entrar. Verifique sua caixa de entrada.";
  }
  if (m.includes("user already registered") || m.includes("already registered") || m.includes("user_already_exists")) {
    return "Este email já está cadastrado. Faça login.";
  }
  if (m.includes("password should be at least")) {
    return "A senha deve ter no mínimo 6 caracteres.";
  }
  if (m.includes("unable to validate email address") || m.includes("invalid email")) {
    return "Email inválido. Verifique e tente novamente.";
  }
  if (m.includes("rate limit") || m.includes("too many requests")) {
    return "Muitas tentativas. Aguarde alguns minutos e tente novamente.";
  }
  if (m.includes("network") || m.includes("failed to fetch")) {
    return "Falha de conexão. Verifique sua internet e tente novamente.";
  }
  if (m.includes("user not found")) {
    return "Usuário não encontrado.";
  }
  if (m.includes("token has expired") || m.includes("expired")) {
    return "O link expirou. Solicite um novo.";
  }
  if (m.includes("same password")) {
    return "A nova senha deve ser diferente da atual.";
  }
  if (m.includes("weak password")) {
    return "Senha muito fraca. Use letras, números e símbolos.";
  }
  return message;
}