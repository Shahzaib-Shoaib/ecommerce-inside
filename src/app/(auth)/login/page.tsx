'use client'
import { Form,  Input, Submit, Password, } from '@/components/ui/form';
import schemas from '@/utils/schemas';

const schema = schemas.object({
  email: schemas.email,
  password: schemas.password,
});

const Login = () => {

  const delay = ms => new Promise(res => setTimeout(res, ms));
  const onLogin = async (e) => {
    await delay(5000);
    console.log(e)
  }
  return (
    <div className='p-10'>
        <h1 className="pb-8">Login</h1>
        <Form schema={schema} className='space-y-4 w-full max-w-sm' onSubmit={(e) => onLogin(e)}>
        <Input name='email' label='Email' placeholder='admin@admin.com' colorScheme='white'/>
        <Password name='password' label='Password' placeholder="********" colorScheme='white'/>
        <Submit label='Login' />
        </Form>
    </div>
  )
}

export default Login