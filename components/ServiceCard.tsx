import { IService } from '@/type'
import { FunctionComponent } from 'react'

const ServiceCard: FunctionComponent<{ service: IService }> = ({
    service: { Icon, title, about },
}) => {
    const createMarkup = () => {
        return {
            __html: about,
        }
    }

    return (
        <div className="flex items-center p-2 space-x-4">
            <Icon className="w-12 h-12 text-primary" />
            <div>
                <h4 className="font-bold">{title}</h4>
                <p dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </div>
    )
}

export default ServiceCard
