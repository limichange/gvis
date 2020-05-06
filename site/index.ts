import { Gvis, logger } from 'gvis'
import './index.less'

const gvis = new Gvis({
  id: 'app',
})

gvis.addImage({
  src: '//pbs.twimg.com/media/EXQvNpRUEAEKvnU?format=jpg&name=4096x4096',
  x: 20,
  y: 20,
  width: 400,
  height: 400,
})
// gvis.addRect(50, 20, 180, 100)
// gvis.addRect(150, 200, 180, 120)

logger.log(gvis)
