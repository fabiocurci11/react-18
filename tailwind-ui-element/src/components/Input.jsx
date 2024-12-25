import { forwardRef } from 'react';

const Input = forwardRef(function Input({ label, ...props }, ref) {
  const classes =
    'block  mt-2 w-full placeholder-gray-400/70  rounded-lg border border-gray-200 px-5 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600  dark:focus:border-blue-300';

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="block text-sm text-gray-500">
        {label}
      </label>
      <input ref={ref} className={classes} {...props} />
    </p>
  );
});

export default Input;
