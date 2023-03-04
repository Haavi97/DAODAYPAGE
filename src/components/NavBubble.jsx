import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import bubbleImage from '@/images/icon-menu.png'

import styles from './styles.module.scss'

export const NavBubble = ({ href, className, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)

  const clicked = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div onClick={clicked} className={styles.menuBubble}>
        <div className={styles.menuBubbleText}>Menu</div>
        <Image className={styles.menuIcon} src={bubbleImage} alt="Menu" />
      </div>
      {isOpen ? (
        <>
          <div className={styles.menuOpen}>
            <Link href="#" className={styles.menuItem}>
              {' '}
              Home{' '}
            </Link>
            <Link href="#speakers" className={styles.menuItem}>
              {' '}
              Speakers{' '}
            </Link>
            <Link href="#schedule" className={styles.menuItem}>
              {' '}
              DAO-Forward Agenda{' '}
            </Link>
            <Link href="#sponsors" className={styles.menuItem}>
              {' '}
              Organizers and Supporters{' '}
            </Link>
            <Link href="#sponsorhip" className={styles.menuItem}>
              {' '}
              Sponsorship Opportunities{' '}
            </Link>
          </div>
        </>
      ) : null}
    </>
  )
}
