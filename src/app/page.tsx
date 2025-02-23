import { LoginBtn } from "../components/LoginBtn";
import "./page.css";

export default function Home() {
  return (
    <div className="container">
      <div className="curved-shape"></div>
      <div className="curved-shape2"></div>
      <div className="form-box Login">
        <h2>Entrar</h2>
        <form action="#">
          <div className="input-box">
            <input type="text" required />
            <label htmlFor="">Endereço de e-mail</label>
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input type="text" required />
            <label htmlFor="">Senha</label>
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <button className="btn" type="submit">Entrar</button>
          </div>
          <div className="regi-link">
            <p>Nâo possui conta? <a href="#" className="CadastroLink">Cadastre-se</a></p>
          </div>
          <LoginBtn />
        </form>
      </div>
      <div className="info-content Login">
      </div>
    </div>
  );
}


