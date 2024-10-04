import mail from "../lib/mail";

export default {
  key: 'RegistrationMail',
  async handle({data}) {
    const { user } = data

    await mail.sendMail({
      from: 'Queue Test<queue@queuetest.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá, ${user.name} bem-vindo ao sistema de filas :D`
    })
  }  
}