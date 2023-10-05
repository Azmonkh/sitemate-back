import { Base } from "src/util/base.entity"
import { Column, Entity } from "typeorm"

@Entity("issue")
export class Issue extends Base{
    @Column()
    name: string

    @Column()
    description: string

}
