type EditorialBlockProps = {
  title: string;
  text: string;
  index?: string;
};

export default function EditorialBlock({ title, text, index }: EditorialBlockProps) {
  return (
    <article className="editorial-block">
      {index ? <span>{index}</span> : null}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
