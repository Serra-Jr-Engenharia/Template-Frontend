import { Instagram, Mail, Linkedin,  } from "lucide-react"

export default function Footer() {

<<<<<<< HEAD
  return (
    <footer className="bg-[#001830] text-white py-[15px] px-[13px] box-border mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div></div>
        <div className="text-base leading-snug text-center md:text-left md:w-auto">
=======

  return (
    <footer className="bg-[#001830] text-white py-[10px] px-[20px] w-full box-border mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-[1200px] w-full px-4 mx-auto">
        <div className="text-base leading-snug text-center md:text-left w-full md:w-auto">
>>>>>>> 3699634ea45375661c056229503e1babf84b6fd7
          <p className="m-0">
            Desenvolvido por Serra Jr. Engenharia, todos os direitos reservados
            © 2025
          </p>
        </div>

        <div className="flex gap-4 flex-wrap justify-center md:justify-end w-full md:w-auto">
          <a
<<<<<<< HEAD
            href="mailto:" // Coloque o email aqui
            className="flex justify-center items-center rounded-full hover:translate-y-[-2px] transition-transform duration-200 cursor-pointer"
          >
            <Mail />
          </a>

          <a
            href="" // Coloque o link do linkedin aqui
=======
            href="mailto:" //ponha o email aqui
            className="flex justify-center items-center rounded-full hover:translate-y-[-2px] transition-transform duration-200 cursor-pointer"
          >
            <img
              src="/./././Email.svg"
              alt="Email"
              className="w-[26px] h-[26px]"
            />
          </a>

          <a
            href="" //ponha o link do linkedin aqui
>>>>>>> 3699634ea45375661c056229503e1babf84b6fd7
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center rounded-full hover:translate-y-[-2px] transition-transform duration-200 cursor-pointer"
          >
<<<<<<< HEAD
            <Linkedin />
          </a>

          <a
            href="" // Coloque o link do instagram aqui
=======
            <img
              src="/./././Linkedin.svg"
              alt="Linkedin"
              className="w-[26px] h-[26px]"
            />
          </a>

          <a
            href="" //ponha o link do instagram aqui
>>>>>>> 3699634ea45375661c056229503e1babf84b6fd7
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center rounded-full hover:translate-y-[-2px] transition-transform duration-200 cursor-pointer"
          >
<<<<<<< HEAD
            <Instagram />
=======
            <img
              src="/./././Instagram.svg"
              alt="Instagram"
              className="w-[26px] h-[26px]"
            />
>>>>>>> 3699634ea45375661c056229503e1babf84b6fd7
          </a>
        </div>
      </div>
    </footer>
  );
}
