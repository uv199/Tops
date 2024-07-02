import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const hobbiesList = [
  { label: 'Reading', value: 'reading' },
  { label: 'Gaming', value: 'gaming' },
  { label: 'Traveling', value: 'traveling' },
  { label: 'Cooking', value: 'cooking' }
];

const HobbiesForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      hobbies: []
    }
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2>Select Your Hobbies</h2>
        {hobbiesList.map(hobby => (
          <div key={hobby.value}>
            <label htmlFor={hobby.value}>{hobby.label}</label>
            <Controller
              name="hobbies"
              control={control}
              render={({ field }) => (
                <input
                  type="checkbox"
                  id={hobby.value}
                  value={hobby.value}
                  checked={field.value.includes(hobby.value)}
                  onChange={e => {
                    const newValue = e.target.checked
                      ? [...field.value, hobby.value]
                      : field.value.filter(val => val !== hobby.value);
                    field.onChange(newValue);
                  }}
                />
              )}
            />
          </div>
        ))}
      </div>

      {errors.hobbies && <p>{errors.hobbies.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default HobbiesForm;
