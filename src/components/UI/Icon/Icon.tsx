interface Props {
  id: string;
  className?: string;
  width: string;
  height: string;
}

function Icon(props: Props) {
  const { id, className, width, height } = props;

  return (
    <svg className={className} width={width} height={height}>
      <use xlinkHref={`/icons/sprite.svg#${id}`} />
    </svg>
  );
}

export default Icon;
