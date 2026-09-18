interface TagProps {
  text: string;
}

export function Tag({ text }: TagProps) {
  return <div>{text}</div>;
}
