import { Gvis, logger } from 'gvis'
import './index.less'

const gvis = new Gvis({
  id: 'app',
})

gvis.addRect(50, 20, 180, 100)

logger.log(gvis)
