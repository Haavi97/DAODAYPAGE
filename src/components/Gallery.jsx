import React, { useEffect } from 'react'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/photoswipe.css'

import Image from 'next/image'

import styles from './styles.module.scss'

export function Gallery(props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    })
    lightbox.init()

    return () => {
      lightbox.destroy()
      lightbox = null
    }
  }, [props.galleryID])

  return (
    <div className={styles.gallery} id={props.galleryID}>
      {props.images.map(
        (image, index) => (
          (
            <a
              href={image.largeURL.src}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              key={props.galleryID + '-' + index}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={image.thumbnailURL}
                alt={image.name}
                className={styles.galleryImage}
              />
            </a>
          )
        )
      )}
    </div>
  )
}
