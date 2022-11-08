import { useState } from 'react';
import Slides from './Slides';

function AboutUs () {

    const [showMore, setShowMore] = useState(false);
    const description = 'Ясность нашей позиции очевидна: выбранный нами инновационный путь требует от нас анализа распределения внутренних резервов и ресурсов. Являясь всего лишь частью общей картины, сделанные на базе интернет-аналитики выводы, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут объективно рассмотрены соответствующими инстанциями. Однозначно, действия представителей оппозиции своевременно верифицированы.<br/>Прежде всего, сложившаяся структура организации напрямую зависит от укрепления моральных ценностей. Как уже неоднократно упомянуто, предприниматели в сети интернет являются только методом политического участия и функционально разнесены на независимые элементы. Как принято считать, ключевые особенности структуры проекта будут в равной степени предоставлены сами себе.';

    return(
        <div>
            <div className="container">
            <h2 className="header">Выбранный нами инновационный путь станет частью наших традиций</h2>
            <p className="par">{showMore ? description : description.substring(0,150) + "..."}<button className='btn-show' onClick={() => setShowMore(!showMore)}>{showMore ?"Скрыть" : "Показать всё"}</button></p>
            </div>
            <Slides/>
        </div>
    )
}

export default AboutUs;