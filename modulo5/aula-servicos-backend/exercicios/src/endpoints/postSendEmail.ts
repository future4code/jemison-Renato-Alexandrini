import { Request, Response } from "express";
import { transporter } from '../services/mailTransporter'

export async function sendEmail(req: Request, res: Response): Promise<void> {
 
        let errorCode = 500
       let targetEmail = req.params.targetEmail
        try{
           
            const send = await transporter.sendMail({
                from: process.env.NODEMAILER_USER,
                to: [`${targetEmail}`],
                subject: "Turma Jemison - Renato Alexandrini - Resolução exercício opcional da aula de Serviços no Backend",
                text: "Email enviado segundo a proposta da resolução do exercício opcional da aula de Serviços no Backend! ",
            });
        
        res.status(200).send(send)
            
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
    
}
  
  