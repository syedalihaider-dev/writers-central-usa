// components/ProcessSection.jsx
'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './ProcessSection.module.css';
import ActionButtons from '@/components/ui/ActionButtons';
import Image from 'next/image';

export default function ProcessSection({ data }) {
  if (!data) return null;

  const steps = Array.isArray(data.steps) && data.steps.length ? data.steps : [];

  const [active, setActive] = useState(0);
  const listRef = useRef(null);

  useEffect(() => {
    if (!listRef.current || steps.length === 0) return;

    const el = listRef.current;

    function onKey(e) {
      const max = steps.length - 1;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActive((s) => Math.min(s + 1, max));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActive((s) => Math.max(s - 1, 0));
      } else if (e.key === 'Home') {
        e.preventDefault();
        setActive(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setActive(max);
      }
    }

    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, [steps.length]);

  return (
    <section className={`${styles.process_section} sec_padding`}>
      <Image
      src="/layers-bg.png"
      fill
      alt="Loading Section Background Image" 
      className={styles.section_bg}
      style={{ objectFit: "cover" }}
      />
      <div className="container">
        <div className={styles.sec_top}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>{data.title || 'From Blank Page to Published Masterpiece'}</h2>
                <p>{data.description || ''}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sec_content}>
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className={styles.sec_left}>
                <ul className={styles.imageList} aria-hidden="true">
                  {steps.map((step, i) => (
                    <li
                      key={step.id ?? i}
                      className={`${styles.imageItem} ${i === active ? styles.active : ''}`}
                      aria-hidden={i === active ? 'false' : 'true'}
                    >
                      <div className={styles.imageWrap}>
                        <Image
                          src={step.image}
                          alt="Loading Process Image"
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw" 
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className={styles.sec_right}>
                <ul
                  className={styles.headingList}
                  role="list"
                  ref={listRef}
                  tabIndex={steps.length > 0 ? 0 : -1}
                >
                  {steps.map((step, i) => (
                    <li key={step.id ?? i} className={styles.headingItem}>
                      <button
                        type="button"
                        className={`${styles.headingBtn} ${i === active ? styles.headingActive : ''}`}
                        onClick={() => setActive(i)}
                        aria-expanded={i === active}
                        aria-controls={`step-panel-${i}`}
                      >
                        <h3 className={styles.headingTitle}>{step.title}</h3>
                      </button>

                      <div
                        id={`step-panel-${i}`}
                        role="region"
                        aria-hidden={i === active ? 'false' : 'true'}
                        className={`${styles.panel} ${i === active ? styles.panelOpen : ''}`}
                      >
                        <p>{step.description || step.text || ''}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="combo_btn">
                  <ActionButtons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
