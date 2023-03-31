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
    lightbox.on('uiRegister', function () {
      lightbox.pswp.ui.registerElement({
        name: 'download-button',
        order: 8,
        isButton: true,
        tagName: 'a',

        // SVG with outline
        html: {
          isCustomSVG: true,
          inner:
            '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/>',
          outlineID: 'pswp__icn-download',
        },

        // Or provide full svg:
        // html: '<svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" class="pswp__icn"><path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" /></svg>',

        // Or provide any other markup:
        // html: '<i class="fa-solid fa-download"></i>'

        onInit: (el, pswp) => {
          el.setAttribute('download', '')
          el.setAttribute('target', '_blank')
          el.setAttribute('rel', 'noopener')

          pswp.on('change', () => {
            el.href = pswp.currSlide.data.src
          })
        },
      })
    })
    lightbox.init()

    return () => {
      lightbox.destroy()
      lightbox = null
    }
  }, [props.galleryID])

  return (
    <div className={styles.gallery} id={props.galleryID}>
      {props.images.map((image, index) => (
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
      ))}
    </div>
  )
}
