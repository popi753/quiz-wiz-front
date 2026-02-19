type CategoriesRowItemProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function CategoriesRowItem({ ...props }: CategoriesRowItemProps) {
  return (
    <li className="snap-start select-none">
      <input
        {...props}
        type="radio"
        name="categoriesRow"
        value={props.id}
        id={props.id}
        className="hidden peer"
      />
      <label
        htmlFor={props.id}
        className="capitalize group-active:cursor-grab font-semibold text-sm leading-5 text-gray-500 cursor-pointer peer-checked:text-gray-900 peer-checked:border-b-3 peer-checked:border-b-gray-900  pb-4.5 whitespace-nowrap"
      >
        {props.id}
      </label>
    </li>
  );
}
