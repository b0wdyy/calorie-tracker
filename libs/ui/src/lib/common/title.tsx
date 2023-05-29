type TitleProps = {
  children: React.ReactNode
  classes?: string
  type?: 'h1' | 'h2' | 'h3' | 'h4'
}

export const Title: React.FC<TitleProps> = ({
  children,
  classes,
  type = 'h1',
}) => {
  let classNames = `font-bold ${classes}`

  switch (type) {
    case 'h2':
      classNames += ' text-3xl'
      return <h2 className={classNames}>{children}</h2>
    case 'h3':
      classNames += ' text-2xl'
      return <h3 className={classNames}>{children}</h3>
    case 'h4':
      classNames += ' text-xl'
      return <h4 className={classNames}>{children}</h4>
    default:
      classNames += ' text-4xl'
      return <h1 className={classNames}>{children}</h1>
  }
}
