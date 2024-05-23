type Props={
    text: string;
    href: string;
}

const DropdownItem = ({text, href}:Props)=>(
<a
href={href}
className= "dropdown-item block px-4 py-2 text-gray-700 hpver:bg-gray-100">
{text}
</a>
);

export default DropdownItem;