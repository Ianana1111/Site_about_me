import ContactForm from "@/components/contact/contact-form";
import Head from 'next/head';
export default function ContactPage(){
  return (
    <>
      <Head>
        <tilte>Contact Me</tilte>
        <meta name = 'description' content = 'Send me your message'/>
      </Head>
      <ContactForm/>
    </>
  )
}