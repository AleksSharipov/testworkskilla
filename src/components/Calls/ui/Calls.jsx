import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { fancyTimeFormat } from '../../../utils/helpers';

import { ReactComponent as Ok } from '../../../assets/img/statusOk.svg';
import { ReactComponent as NotOk } from '../../../assets/img/statusFalse.svg';
import { ReactComponent as Play } from '../../../assets/img/play.svg';
import { ReactComponent as Stop } from '../../../assets/img/stop.svg';
import { ReactComponent as Save } from '../../../assets/img/save.svg';
import { ReactComponent as Del } from '../../../assets/img/del.svg';

import styles from './calls.module.scss';
import { useRef } from 'react';

const data = {}

export const Calls = () => {

  const [resData, setResData] = useState([]);
  const [playRecord, isPlayRecord] = useState(false);
  const [activePlayer, setActivePlayer] = useState(null);
  const [record, setRecord] = useState(null);

  useEffect(() => {
    axios.post('https://api.skilla.ru/mango/getList', data, {
      headers: {
        'Authorization': 'Bearer testtoken',
      }
    })
      .then(res => {
        setResData(res.data.results)
      })
  }, [])

  const handlePlayRecord = (id, record, partnershipId) => {
    setActivePlayer(id);
    isPlayRecord(!playRecord);

    axios.post(`https://api.skilla.ru/mango/getRecord?record=${record}&partnership_id=${partnershipId}`, data, {
      headers: {
        'Authorization': 'Bearer testtoken',
        'Content-type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
        'Content-Transfer-Encoding': 'binary',
        'Content-Disposition': 'filename="record.mp3"'
      }
    })
      .then(res => {
        const audioElement = new Audio(res.data)
        return audioElement
      })
      .then(audio => setRecord([audio]))

  }


  return (
    <div className={styles.calls}>
      <div className={styles.callHeader}>
        <div className={styles.type}><p>Тип</p></div>
        <div className={styles.time}><p >Время</p></div>
        <div className={styles.personal}><p >Сотрудник</p></div>
        <div className={styles.call}><p >Звонок</p></div>
        <div className={styles.source}><p >Источник</p></div>
        <div className={styles.grade}><p >Оценка</p></div>
        <div className={styles.duration}><p >Длительность</p></div>
      </div>
      {
        resData && resData.map(el => {
          return (
            <div
              key={el.id}
              className={styles.content}
            >
              <div className={styles.type}>
                <p>
                  {el.status === 'Не дозвонился' ? <NotOk /> : <Ok />}
                </p>
              </div>
              <div className={styles.time}><p >{el.date.substring(11, 16)}</p></div>
              <div className={styles.personal}><img alt='avatar' src={el.person_avatar} /></div>
              <div className={styles.call}><p >+ {el.partner_data.phone}</p></div>
              <div className={styles.source}><p >{el.source}</p></div>
              {/* <div className={styles.source}><p >{el.source ? el.source : 'Санкт-Петербург источник в три строки, кто-то так пишет, ну ладно, но некрасивоно некрасивоно некрасивоно некрасиво'}</p></div> */}
              <div className={styles.grade}>
                {
                  el.errors && <p style={{ color: 'rgba(234, 26, 79, 1)' }}> {el.errors[0]}</p>
                }
                {/* <p >Оценка</p> */}
              </div>
              {el.time > 0 && <div className={styles.records}>
                {
                  <>
                    <p className={styles.duration}>{fancyTimeFormat(el.time)}</p>
                    <div className={styles.record}>
                      <span>{fancyTimeFormat(el.time)}</span>
                      <div
                        className={styles.player}
                        onClick={() => handlePlayRecord(el.id, el.record, el.partnership_id)}
                      >
                        {playRecord && activePlayer === el.id ? <Stop /> : <Play />}
                      </div>
                      <div className={styles.progressLine}>
                        <div className={styles.timeLine}></div>
                      </div>
                      <Save
                        className={styles.save}
                      />
                      <Del
                        className={styles.del}
                      />
                    </div>
                  </>
                }
              </div>}
            </div>
          )
        })
      }
    </div>
  )
}
