import { HeaderContainer } from './styles';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/logo.svg';
export function Header() {
    return (
        <HeaderContainer>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
      </HeaderContainer>
    )
}