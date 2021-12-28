import './myLabel.css'

export interface Props {
  /**
   * Establece el texto del label
   */
  label?: string
  /**
   * Establece un font size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3'
  /**
   * Capitaliza toda la palabra
   */
  allCaps?: boolean
  /**
   * Color del label
   */
  color?: 'primary' | 'secondary' | 'tertiary'
  /**
   * Establece un color custom al label
   */
  fontColor?: string
  /**
   * Establece un background color al label
   */
  backgroundColor?: string

}

export const MyLabel = ({
  label = 'No Label',
  size = 'normal',
  color = 'primary',
  allCaps = false,
  fontColor,
  backgroundColor = 'transparent'
}: Props) => {
  return (
    <span
      style={{ backgroundColor, color: fontColor }}
      className={`label ${size} text-${color}`}>
      {(allCaps) ? label.toUpperCase() : label}
    </span>
  )
}
