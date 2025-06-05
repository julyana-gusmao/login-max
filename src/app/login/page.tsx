"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import illustration from "@/assets/login/illustration.png";
import logo from "@/assets/login/logo.png";
import {
  Container,
  FormWrapper,
  IllustrationWrapper,
  Section,
  Main,
  Subtitle,
  Title,
  Illustration,
  LeftContent,
  RightContent,
} from "./styles";
import Image from "next/image";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const success = await login(email, password);
    if (success) {
      router.push("/eventos");
    } else {
      setError("E-mail ou senha inválidos");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <Main>
      <Container>
        <Section>
          <LeftContent>
            <Image src={logo} alt="Logo" />
            <div>
              <Title>Bem-vindo de volta</Title>
              <Subtitle>Entre com sua conta para acessar o painel.</Subtitle>
            </div>
            <FormWrapper as="form" onSubmit={handleSubmit}>
              <Input
                label="E-mail"
                placeholder="seunome@seuservidor.com"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
              <Input
                label="Senha"
                placeholder="Digite aqui"
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              />
              {error && <p style={{ color: "red", fontSize: 12 }}>{error}</p>}
              <Button type="submit">Enviar</Button>
            </FormWrapper>
          </LeftContent>

          <RightContent>
            <Illustration src={illustration} alt="Ilustração" priority />
            <IllustrationWrapper />
          </RightContent>
        </Section>
      </Container>
    </Main>
  );
}
