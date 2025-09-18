import { Instagram, Mail, Linkedin,  } from "lucide-react"

export default function Footer() {

  return (
    <footer className="bg-[#001830] text-white py-[15px] px-[13px] box-border mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div></div>
        <div className="text-base leading-snug text-center md:text-left md:w-auto">
          <p className="m-0">
            Desenvolvido por Serra Jr. Engenharia, todos os direitos reservados
            © 2025
          </p>
        </div>

        <div className="flex gap-4 flex-wrap justify-center md:justify-end w-full md:w-auto">
          <a
            href="mailto:serrajr@iprj.uerj.br" 
            className="flex justify-center items-center rounded-full hover:translate-y-[-2px] transition-transform duration-200 cursor-pointer"
          >
            <Mail />
          </a>

          <a
            href="https://www.linkedin.com/company/serrajreng/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center rounded-full hover:translate-y-[-2px] transition-transform duration-200 cursor-pointer"
          >
            <Linkedin />
          </a>

          <a
            href="https://www.instagram.com/serrajreng/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center rounded-full hover:translate-y-[-2px] transition-transform duration-200 cursor-pointer"
          >
            <Instagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
