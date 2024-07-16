/// <reference types="react-scripts" />

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isActive: string;
  isAdmin: string;
  createdAt: string;
  updatedAt: string;
}

interface InitialAuthState {
  currentUser: null | User;
  loading: boolean;
  error: boolean;
  accessToken: null | string;
  refreshToken: null | string;
  remainingTime: number;
}

interface SignInFormValues {
  email: string;
  password: string;
}

interface SignUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

interface SignUpInputFields {
  id: number;
  type: string;
  name: string;
  placeholder: string;
  showToggle: boolean;
  showPassword?: boolean;
  onToggleShowPassword?: () => void;
  password?: string; // for confirmPassword
}

interface SignUpInputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  touched?: boolean;
  showToggle?: boolean;
  showPassword?: boolean;
  onToggleShowPassword?: () => void;
  onFocus?: () => void;
  password?: string; // for confirmPassword
}

interface ResetValues {
  email: string;
  newPassword: string;
  confirmNewPassword: string;
}

interface ResetInputFields {
  id: number;
  name: string;
  type: string;
  toggleIcon?: React.ReactNode;
  onToggleClick?: () => void; // for toggling password visibility
  placeholder: string;
}

type showChecklist = boolean;
interface PasswordCheckListProps {
  password: string;
  confirmPassword: string;
  setShowChecklist: React.Dispatch<React.SetStateAction<showChecklist>>;
}

interface Rule {
  id: number;
  emoji: string;
  content: string;
}

interface ThemeState {
  darkMode: boolean;
}

interface NewTodo {
  name: string;
  description: string;
  cardColor: string;
  repeat: string;
  priority: number;
  dueDates: string[];
  tagId: string;
  isCompleted: false;
}
interface Priorities {
  value: number;
  label: string;
}

interface PriorityBtn {
  priority: Priorities;
}

interface ExampleCustomInputProps {
  value?: string;
  onClick?: () => void;
}

type checked = boolean;
interface Repeat {
  startDate: Date;
  checked: checked;
  setChecked: React.Dispatch<React.SetStateAction<checked>>;
}
interface RepeatSectionProps {
  options: { value: string; label: string; isDisabled?: boolean }[];
  selectedValue: string | string[];
  onClick: (value: string) => void;
}

interface RepeatValueBtnProps {
  value: string;
  label: string;
  selectedValue: string | string[];
  onClick: (value: string) => void;
  isDisabled?: boolean;
}

interface ActionBtnsComp {
  setChecked: React.Dispatch<React.SetStateAction<checked>>;
}

interface ActionBtnProps {
  onClick?: () => void;
  loading: boolean;
  icon: React.ReactNode;
  label: string;
  color: string;
  disabled?: boolean;
  type?: string;
}

interface TagValues {
  id: string;
  name: string;
}

interface TodoSliceStateValues {
  todos: NewTodo[];
  tags: TagValues[];
  tagTodos: NewTodo[];
  loading: boolean;
  error: boolean;
}
