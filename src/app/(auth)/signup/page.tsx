'use client'
import { Form,  Radio, Input, Phone, Select, Submit, Password, Checkbox, Textarea, File } from '@/components/ui/form';
import schemas from '@/utils/schemas';

const schema = schemas.object({
  name:schemas.name,
  email: schemas.email,
  password: schemas.password,
});

const Signup = () => {

  const delay = ms => new Promise(res => setTimeout(res, ms));
  const onSignup = async (e) => {
    await delay(5000);
    console.log(e)
  }
  return (
    <div className='p-10'>
        <h1 className="pb-8">Signup</h1>
        <Form schema={schema} className='space-y-4 w-full max-w-sm' onSubmit={(e) => onSignup(e)}>
        <Input name='name' label='Name' placeholder='Username' colorScheme='white'/>
        <Input name='email' label='Email' placeholder='admin@admin.com' colorScheme='white'/>
        <Password name='password' label='Password' placeholder="********" colorScheme='white'/>
        <Submit label='Signup' />
        </Form>
    </div>
  )
}

export default Signup