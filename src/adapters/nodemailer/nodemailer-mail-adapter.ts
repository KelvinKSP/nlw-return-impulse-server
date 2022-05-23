import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail.adapter';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "72e5f52bdb1fdf",
        pass: "fd473506c7b08e"
    }
});


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body } : SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Kelvin Penha <kelvinpenha10@gmail.com>',
            subject,
            html: body,
        });
    }
}

