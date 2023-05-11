import React, { useCallback, useState } from 'react';

import { SidebarItem } from '../../SidebarItem/SidebarItem';
import { Button } from '../../Button/Button';

import { ReactComponent as Logo } from '../../../assets/img/logo.svg';
import { ReactComponent as Chart } from '../../../assets/img/chart.svg';
import { ReactComponent as Orders } from '../../../assets/img/orders.svg';
import { ReactComponent as Mail } from '../../../assets/img/mail.svg';
import { ReactComponent as Calls } from '../../../assets/img/calls.svg';
import { ReactComponent as People } from '../../../assets/img/people.svg';
import { ReactComponent as Documents } from '../../../assets/img/documents.svg';
import { ReactComponent as Identity } from '../../../assets/img/identity.svg';
import { ReactComponent as Briefcase } from '../../../assets/img/briefcase.svg';
import { ReactComponent as LocalLibrary } from '../../../assets/img/local_library.svg';
import { ReactComponent as Settings } from '../../../assets/img/settings.svg';
import { ReactComponent as Plus } from '../../../assets/img/plus.svg';
import { ReactComponent as Alert } from '../../../assets/img/alert.svg';

import styles from './sidebar.module.scss';

export const Sidebar = () => {

  const [isActiveMenuItem, setIsActiveMenuItem] = useState({ key: 4, title: 'Звонки', img: <Calls /> })
  const menuItem = [
    {
      key: 1,
      title: 'Итоги',
      img: isActiveMenuItem.key === 1 ? <Chart fillOpacity="none" /> : <Chart fillOpacity="0.6" />
    },
    {
      key: 2,
      title: 'Заказы',
      img: isActiveMenuItem.key === 2 ? <Orders fillOpacity="none" /> : <Orders fillOpacity="0.6" />
    },
    {
      key: 3,
      title: 'Сообщения',
      img: isActiveMenuItem.key === 3 ? <Mail fillOpacity="none" width={'24px'} /> : <Mail fillOpacity="0.6" width={'24px'} />
    },
    {
      key: 4,
      title: 'Звонки',
      img: isActiveMenuItem.key == 4 ? <Calls fillOpacity="none" /> : <Calls fillOpacity="0.6" />
    },
    {
      key: 5,
      title: 'Контрагенты',
      img: isActiveMenuItem.key === 5 ? <People fillOpacity="none" /> : <People fillOpacity="0.6" />
    },
    {
      key: 6,
      title: 'Документы',
      img: isActiveMenuItem.key === 6 ? <Documents fillOpacity="none" /> : <Documents fillOpacity="0.6" />
    },
    {
      key: 7,
      title: 'Исполнители',
      img: isActiveMenuItem.key === 7 ? <Identity fillOpacity="none" /> : <Identity fillOpacity="0.6" />
    },
    {
      key: 8,
      title: 'Отчеты',
      img: isActiveMenuItem.key === 8 ? <Briefcase fillOpacity="none" /> : <Briefcase fillOpacity="0.6" />
    },
    {
      key: 9,
      title: 'База знаний',
      img: isActiveMenuItem.key === 9 ? <LocalLibrary fillOpacity="none" /> : <LocalLibrary fillOpacity="0.6" />
    },
    {
      key: 10,
      title: 'Настройки',
      img: isActiveMenuItem.key === 10 ? <Settings fillOpacity="none" /> : <Settings fillOpacity="0.6" />
    },
  ];

  const handleClickItem = useCallback((el) => {
    setIsActiveMenuItem(el)
  }, [isActiveMenuItem]);


  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Logo
          fill='rgba(255, 213, 0, 1)'
        />
      </div>
      <div className={styles.items}>
        {
          menuItem.map(el => {
            return (
              <SidebarItem
                key={el.key}
                id={el.key}
                img={el.img}
                title={el.title}
                activEl={isActiveMenuItem}
                click={() => handleClickItem(el)}
              />

            )
          })
        }
      </div>
      <div className={styles.details}>
        <Button
          text={'Добавить заказ'}
          img={<Plus fill="#D8E4FB" fillOpacity="0.56" />}
          classNames={styles.add}
        />
        <Button
          text={'Оплата'}
          img={<Alert />}
          classNames={styles.add}
          styles={{ marginTop: '32px' }}
        />
      </div>
    </div>
  )
}
