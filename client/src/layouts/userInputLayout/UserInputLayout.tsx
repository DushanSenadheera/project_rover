import './userInputLayout.scss'

type UserInputLayoutProps = {
    children: React.ReactNode;
    bg: string;
  };

export default function userInputLayout({ children, bg }: UserInputLayoutProps) {
  return (
    <div className="destination">
      <div className="destination-img">
        <img src={bg} alt="" />
      </div>
      <div className="destination-form">
        {children}
      </div>
    </div>
  )
}
