import { Form,  Radio, Input, Phone, Select, Submit, Password, Checkbox, Textarea, File } from '@/components/ui/form';
//import Page from 'components/page';
import schemas from '@/utils/schemas';

const schema = schemas.object({
  email: schemas.email,
  password: schemas.password,
});

export default function Login() {
  return (
    // <Page title='Login'>
      <div className="min-h-screen p-10 space-y-8 flex flex-col flex-center w-screen h-screen">
        <h1 className="text-lg text-center font-bold uppercase">Login</h1>
        <Form schema={schema} className='space-y-10 w-full max-w-sm' onSubmit={() => {}}>

        isSubmitting
          <Input name='email' label='Email' placeholder='admin@admin.com'/>
          <Password name='password' label='Password' placeholder="********"/>
          <Textarea name='desc' label='Enter Description'/>
          <Phone  name='phone'  label='Phone'/>
          <Checkbox name='checkbox' label="I agree to sell my privacy" />  
          {/* <File  name='fileInput' label='Your resume' type= "multipart" />   */}

          <Select name='select' label='Select' options={[
                  { value: "react", label: "React" },
                  { value: "ng", label: "Angular" },
                  { value: "svelte", label: "Svelte" },
                  { value: "vue", label: "Vue" },
                  { value: "riot", label: "Riot" },
                  { value: "next", label: "Next.js" },
                  { value: "blitz", label: "Blitz.js" }
                ]}/> 
          
           
           <Radio name='radio' label='Radio' options={[
                  { value: "react", label: "React" },
                  { value: "ng", label: "Angular" },
                  { value: "svelte", label: "Svelte" },
                  { value: "vue", label: "Vue" },
                  { value: "riot", label: "Riot" },
                  { value: "next", label: "Next.js" },
                  { value: "blitz", label: "Blitz.js" }
                ]}/> 

          <Submit label='Login' />
        </Form>
      </div>
    // </Page>
  );
}
