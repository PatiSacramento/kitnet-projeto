export const ContactButton = ({ name }: { name: string }) => {
  return (
    <a
      className="rounded-lg bg-blue-600 px-6 py-3 text-white shadow transition hover:bg-blue-700"
      href={`https://api.whatsapp.com/send?phone=5511944531303&text=Olá!%20Tenho%20interesse%20na%20kitnet%20da%20${name}.`}
      target="_blank"
      rel="noreferrer"
    >
      Entrar em Contato
    </a>
  )
}
