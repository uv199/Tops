import { useForm } from "react-hook-form";
import { Form, Input, Label } from "reactstrap";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input defaultValue="test" {...register("example")} />
      </FormGroup>
      <FormGroup>
        <Input {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
      </FormGroup>

      <Button>Submit</Button>
    </Form>
  );
}
