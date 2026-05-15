import { useState, useRef} from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { useTranslation } from 'react-i18next';
import { Modal } from './Modal';


const Contact = () => {

  const { t } = useTranslation();
  const formRef = useRef();
  const [form, setForm]= useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState('success');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value});

  }
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setLoading();

    fetch('https://contact-form.gracielavargasg.workers.dev', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message
      })
    })
    .then(res => res.json())
  .then(data => {
    setLoading(false);
    if (data.success) {
      setModalMessage('Thank you! I will get back to you as soon as possible.');
      setModalType('success');
      setModalOpen(true);
      setForm({ name: '', email: '', message: '' });
    } else {
      throw new Error();
    }
  })
  .catch(() => {
    setLoading(false);
    setModalMessage('Something went wrong.');
    setModalType('error');
    setModalOpen(true);
  });
}


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>{t('Contact_subt')}</p>
        <h3 className={styles.sectionHeadText}>{t('Contact_title')}</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t('Form_name')}</span>
            <input 
              type="text" 
              name='name' 
              value={form.name}
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder: text-secondary text-white rounded-lg outline-none border-none font-medium'  
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t('Form_email')}</span>
            <input 
              type="email" 
              name='email' 
              value={form.email}
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder: text-secondary text-white rounded-lg outline-none border-none font-medium'  
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t('Form_msg')}</span>
            <textarea 
              rows='7'
              name='message' 
              value={form.message}
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder: text-secondary text-white rounded-lg outline-none border-none font-medium'  
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? t('Form_sending') : t('Form_send')}
          </button>
        </form>
      </motion.div>

      <motion.div
      variants={slideIn('right', "tween", 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[330px] '
      >
        <EarthCanvas />
      </motion.div>

      <Modal 
        isOpen={modalOpen}
        title={modalType === 'success' ? 'Success!' : 'Error'}
        message={modalMessage}
        onClose={() => setModalOpen(false)}
        type={modalType}
      />
    </div>
  )
}

export default SectionWrapper(Contact, "contact")