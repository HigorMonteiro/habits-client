import '../styles/global.css'
import { Plus } from "phosphor-react";
import logoImage from '../assets/logo.svg'

export function Header() {
  return (
    <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
    <img src={logoImage} alt="Habbits" />
    <button type='button' className='border-lightViolet bg-violetBold font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-white'>
      <Plus size={20}/>
      New Habbit
    </button>
  </div>
  )
}