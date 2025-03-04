import Reacte from 'react';
import { 
  BrainCircuit, 
  Code2, 
  Database, 
  FileJson,
  Globe,
  Laptop,
  LayoutGrid,
  Server,
  Mail
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faNode, 
  faJs, 
  faPython,
  faGithub,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { 
  faCode, 
  faDatabase,
  faGlobe,
  faLaptopCode,
  faBrain
} from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  // Lucide icons
  'react-lucide': <Code2 className="w-8 h-8" />,
  'node-lucide': <Server className="w-8 h-8" />,
  'typescript': <FileJson className="w-8 h-8" />,
  'mongodb': <Database className="w-8 h-8" />,
  'ai': <BrainCircuit className="w-8 h-8" />,
  'web': <Globe className="w-8 h-8" />,
  'frontend': <LayoutGrid className="w-8 h-8" />,
  'fullstack': <Laptop className="w-8 h-8" />,
  'mail': <Mail className="w-8 h-8" />,

  // FontAwesome icons
  'react': <FontAwesomeIcon icon={faReact} className="w-8 h-8" />,
  'node': <FontAwesomeIcon icon={faNode} className="w-8 h-8" />,
  'javascript': <FontAwesomeIcon icon={faJs} className="w-8 h-8" />,
  'python': <FontAwesomeIcon icon={faPython} className="w-8 h-8" />,
  'github': <FontAwesomeIcon icon={faGithub} className="w-7 h-7" />,
  'linkedin': <FontAwesomeIcon icon={faLinkedin} className="w-7 h-7" />,
  'twitter': <FontAwesomeIcon icon={faTwitter} className="w-7 h-7" />,
  'code': <FontAwesomeIcon icon={faCode} className="w-8 h-8" />,
  'database': <FontAwesomeIcon icon={faDatabase} className="w-8 h-8" />,
  'globe': <FontAwesomeIcon icon={faGlobe} className="w-8 h-8" />,
  'laptop': <FontAwesomeIcon icon={faLaptopCode} className="w-8 h-8" />,
  'brain': <FontAwesomeIcon icon={faBrain} className="w-8 h-8" />
};

interface Props {
  name: keyof typeof iconMap;
  label: string;
  className?: string;
  isButton?: boolean;
}

const IconSet = ({ name, label, className = '', isButton = false }: Props) => {
  const icon = iconMap[name];
  
  if (isButton) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {icon}
        {label && <span className="text-gray-700 dark:text-gray-300 font-medium">{label}</span>}
      </div>
    );
  }

  return (
    <div className={`p-3 bg-white dark:bg-neutral-700 rounded-lg text-center hover:scale-105 transition-all group border border-neutral-200 dark:border-neutral-600 ${className}`}>
      <div className="flex flex-col items-center gap-2">
        <div className="text-neutral-700 dark:text-white group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
          {icon}
        </div>
        {label && <span className="text-xs text-neutral-700 dark:text-white font-medium">{label}</span>}
      </div>
    </div>
  );
}
export default IconSet;