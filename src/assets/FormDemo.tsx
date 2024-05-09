import { Button, Form, Input } from "@arco-design/mobile-react"
import { useRef, useState } from "react"

export const FormDemo = () => {
  const formRef = useRef()
  const [layout, setLayout] = useState('horizontal')
  const toSubmit = (val) => {
    formRef.current.form.submit()
  }
  const onSubmit = (value, result) => {
    console.log('----submit Successfully', value, result);
  }
  return (
    <Form ref={formRef} onSubmit={onSubmit} layout={layout}>
      <Form.Item field="name" label="UserName">
        <Input placeholder="Please input username" />
      </Form.Item>
      <Form.Item field="age" label="Age">
        <Input placeholder="Please input age" />
      </Form.Item>
      <Button needActive onClick={toSubmit}>
        Submit
      </Button>
    </Form>
  )
}