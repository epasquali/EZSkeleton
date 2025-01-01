import { AuthForm } from "./AuthForm";
import { AUTH_HEADERS } from "../../config/formheaders";

export function LoginForm() {
  return <AuthForm headings={AUTH_HEADERS.login} />;
}
