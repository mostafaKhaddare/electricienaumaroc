import {useState} from 'react'
import Container from './Container'
import {AiOutlineSend} from "react-icons/ai"
import {FaWhatsapp} from "react-icons/fa"
import {AiFillMail} from "react-icons/ai"
import {WhatsAppWidget} from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import { Formik , Form  , ErrorMessage, FastField  } from "formik";
import { object, string } from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ContactUs() {

  const notify = () => toast.success("thank you for your contact");

  let initialValues = {
    fullname : "",
    subject : "",
    email : "",
    message : ""
  }

  const onSubmit = async (values, onSubmitProps) => {
    const res = await fetch("/api/contact", {
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (res.ok) {
      notify();
      onSubmitProps.resetForm();
    }

};

//
const validateScheme = object({
  fullname: string().required("required"),
  subject: string().required("required"),
  email: string().required("required").email("invalid email format"),
  message: string().required("required"),
  
});



  return (
<section id='contact' className="relative z-10 overflow-hidden bg-slate-100 py-20 ">
    <Container>
          <div className="-mx-4 flex flex-wrap lg:justify-between">
               <div className="w-full px-4 lg:w-1/2 ">
                      <div className="mb-12 max-w-[800px] lg:mb-0">
                              <h1 className="text-dark mb-4 text-xl font-bold uppercase md:text-5xl text-yellow-400 leading-normal">
                                     Réservez dès maintenant pour votre prestation
                              </h1>
                              <p className="text-body-color mb-9 text-lg leading-relaxed">
                              Nous sommes ravis de vous offrir des prestations de qualité supérieure pour répondre à tous vos besoins. Que ce soit pour une occasion spéciale ou simplement pour vous faire plaisir, notre équipe expérimentée est à votre disposition pour vous fournir une expérience inoubliable. Nous vous invitons à réserver dès maintenant pour profiter de nos services exceptionnels
                              </p>
                              <div className="mb-8 flex w-full max-w-[370px]">
                                <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                                      <FaWhatsapp  className='text-green-600  text-xl md:text-4xl'/>
                                </div>
                                <a  href={`https://wa.me/+212666650286`} target='_blank' className="w-full cursor-pointer">
                                       <h4 className="text-dark mb-1 text-xl font-bold">Numéro de téléphone</h4>
                                        <p className="text-body-color text-base">+212&nbsp;666&nbsp;65&nbsp;02&nbsp;86</p>
                                </a>
                             </div>
          <div className="mb-8 flex w-full max-w-[370px]">
            <div
              className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]"
            >
            <AiFillMail  className='text-blue-600  text-xl md:text-4xl'/>
            </div>
            <a href="mailto:contact@electricienaumaroc.com" target='_blank' className="w-full">
              <h4 className="text-dark mb-1 text-xl font-bold">Adresse e-mail</h4>
              <p className="text-body-color text-base">contact@electricienaumaroc.com</p>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
        <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
           
        <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validateScheme}
       >
        {formik => {
        return (
          <Form>
          <div className="mb-2">
              <label className="text-gray-600 " htmlFor="fullname"> full Name </label>
              <FastField 
                     className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                     type="text" 
                     id="fullname" 
                     name="fullname" 
                     placeholder="Enter Your Full Name *"
                />
                <ErrorMessage name="fullname">
                {errorMsg => <p className="text-red-400"> {errorMsg} </p>}
              </ErrorMessage>
            </div>
            <div className="mb-2">
              <label className="text-gray-600 " htmlFor="subject"> subject </label>
              <FastField className='border-b-2 p-3 w-full border bg-orange-50 border-slate-100 rounded-md outline-none shadow-sm mt-1  focus:border-main-color'
                     type="text" 
                     id="subject" 
                     name="subject" 
                     placeholder="Enter Your subject *"
                />
                {/* {formik.errors.name && formik.touched.name? (<p className="text-red-500"> {formik.errors.name} </p>) : null}   */}
                <ErrorMessage name="subject">
              {errorMsg => <p className="text-red-400"> {errorMsg} </p>}
              </ErrorMessage>
            </div>
          <div className="mb-2">
              <label className="text-gray-600 " htmlFor="email"> Email </label>
               <FastField 
                      className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                      type="email"
                      id="email" 
                      name="email" 
                      placeholder="Enter Your Email *" 
                />
              <ErrorMessage name="email">
              {errorMsg => <p className="text-red-400"> {errorMsg} </p>}
              </ErrorMessage>
          </div>
          <div  className="mb-4">
              <label className="text-gray-600 " htmlFor="message"> Message </label>
              <FastField 
                      className="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                      name="message" 
                      id="message" 
                      as="textarea"
                      placeholder="Your Message *"
                      />
              <ErrorMessage name="message">
              {errorMsg => <p className="text-red-400"> {errorMsg} </p>}
              </ErrorMessage>
          </div>
          <button
                type="submit" disabled={!formik.isValid || formik.isSubmitting}
                className={`${!formik.isValid || formik.isSubmitting ? "opacity-50 cursor-not-allowed" : "opacity-100"} bg-blue-500 border-primary w-full rounded border p-3 text-white transition hover:bg-blue-400 `}
              >
                {formik.isSubmitting ? 'loading ...' : <>  Send Your Message <AiOutlineSend/> </>}
              </button>
                <ToastContainer autoClose={2000} pauseOnFocusLoss={false}  /> 
      </Form>
        )
      }}

      </Formik>
          {/* <form onSubmit={handleSubmit} >
            <div className="mb-6">
              <input
                value={name} 
                onChange={e => setName(e.target.value)}
                type="text"
                placeholder="Your Name"
                className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              />
            </div>
            <div className="mb-6">
              <input
                value={email} 
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder="Your Email"
                className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              />
            </div>
            <div className="mb-6">
              <input
               value={phone} 
               onChange={e => setPhone(e.target.value)}
                type="text"
                placeholder="Your Phone"
                className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              />
            </div>
            <div className="mb-6">
              <textarea
                value={message} 
                onChange={e => setMessage(e.target.value)}
                rows="6"
                placeholder="Your Message"
                className="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 border-primary w-full rounded border p-3 text-white transition hover:bg-blue-400"
              >
                Send Message
              </button>
            </div>
          </form> */}
          <WhatsAppWidget phoneNumber="212648522511" companyName="ElectricienAuMaoc" replyTimeText="on repond a quelque minutes" message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil deleniti nostrum aliquam nesciunt" sendButtonText="envoyer votre message" inputPlaceHolder="ecrire votre message" open={true}  />
          <div>
            <span className="absolute -top-10 -right-9 z-[-1]">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                  fill="#3056D3"
                />
              </svg>
            </span>
            <span className="absolute -right-10 top-[90px] z-[-1]">
              <svg
                width="34"
                height="134"
                viewBox="0 0 34 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="31.9993"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 31.9993 132)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 31.9993 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 31.9993 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 31.9993 88)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 31.9993 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 31.9993 45)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 31.9993 16)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 31.9993 59)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 31.9993 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 31.9993 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 17.3333 132)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 17.3333 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 17.3333 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 17.3333 88)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 17.3333 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 17.3333 45)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 17.3333 16)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 17.3333 59)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 17.3333 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 17.3333 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 2.66536 132)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 2.66536 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 2.66536 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 2.66536 88)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 2.66536 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 2.66536 45)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 2.66536 16)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 2.66536 59)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 2.66536 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 2.66536 1.66665)"
                  fill="#13C296"
                />
              </svg>
            </span>
            <span className="absolute -left-7 -bottom-7 z-[-1]">
              <svg
                width="107"
                height="134"
                viewBox="0 0 107 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="104.999"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 104.999 132)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 104.999 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 104.999 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 104.999 88)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 104.999 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 104.999 45)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 104.999 16)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 104.999 59)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 104.999 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 104.999 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 90.3333 132)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 90.3333 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 90.3333 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 90.3333 88)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 90.3333 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 90.3333 45)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 90.3333 16)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 90.3333 59)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 90.3333 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 90.3333 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 75.6654 132)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 31.9993 132)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 75.6654 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 31.9993 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 75.6654 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 31.9993 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 75.6654 88)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 31.9993 88)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 75.6654 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 31.9993 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 75.6654 45)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 31.9993 45)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 75.6654 16)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 31.9993 16)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 75.6654 59)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 31.9993 59)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 75.6654 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 31.9993 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 75.6654 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 31.9993 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 60.9993 132)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 17.3333 132)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 60.9993 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 17.3333 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 60.9993 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 17.3333 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 60.9993 88)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 17.3333 88)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 60.9993 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 17.3333 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 60.9993 45)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 17.3333 45)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 60.9993 16)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 17.3333 16)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 60.9993 59)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 17.3333 59)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 60.9993 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 17.3333 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 60.9993 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 17.3333 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 46.3333 132)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 2.66536 132)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 46.3333 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 2.66536 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 46.3333 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 2.66536 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 46.3333 88)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 2.66536 88)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 46.3333 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 2.66536 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 46.3333 45)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 2.66536 45)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 46.3333 16)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 2.66536 16)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 46.3333 59)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 2.66536 59)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 46.3333 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 2.66536 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 46.3333 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 2.66536 1.66665)"
                  fill="#13C296"
                />
              </svg>
            </span>
          </div>
        </div>
    </div>
      
    </div>
    </Container>
</section>

  )
}
