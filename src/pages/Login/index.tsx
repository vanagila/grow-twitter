import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { login } from "../../services/auth.service";
import { Card, Container, FormContainer, WelcomeCard } from "./style";

export const Login = () => {
  const navigate = useNavigate();

  const loginData = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const data = {
      username: ev.currentTarget.username.value,
      password: ev.currentTarget.password.value,
    };

    const response = await login(data);

    if (response.code !== 200) {
      alert(response.message);
      return;
    }

    localStorage.setItem("token", JSON.stringify(response.data.token));
    localStorage.setItem("user", JSON.stringify(response.data));

    alert(response.message);
    navigate("/home");
  };

  return (
    <Container>
      <Card>
        <WelcomeCard>
          <h1>Growtwitter</h1>
          <span>Trabalho final do bloco intermediário</span>
          <p>
            O Growtwitter é a plataforma definitiva para todos os apaixonados
            por redes sociais que buscam uma experiência familiar e poderosa,
            semelhante ao Twitter, mas com um toque único. Seja parte desta
            comunidade que valoriza a liberdade de expressão, a conexão com
            pessoas de todo o mundo e a disseminação de ideias.
          </p>
        </WelcomeCard>

        <FormContainer>
          <form onSubmit={loginData}>
            <h2>Entrar no Growtwitter</h2>
            <Input label="Username" id="username" name="username" />

            <Input
              label="Password"
              id="password"
              type="password"
              name="password"
            />

            <Button />
          </form>
        </FormContainer>
      </Card>
    </Container>
  );
};
