import { Gvis, logger } from 'gvis'
import './index.less'

const gvis = new Gvis({
  id: 'app',
})

gvis.addImage()
// gvis.addRect(50, 20, 180, 100)
// gvis.addRect(150, 200, 180, 120)

logger.log(gvis)
