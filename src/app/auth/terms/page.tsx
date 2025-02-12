import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface TermsModalProps {
  isOpen: boolean
  closeModal: () => void
}

export default function TermsModal({ isOpen, closeModal }: TermsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Termos e Condições</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <p>Insira o conteúdo completo dos termos e condições aqui.</p>
        </DialogDescription>
        <button onClick={closeModal} className="mt-4 text-blue-600">
          Fechar
        </button>
      </DialogContent>
    </Dialog>
  )
}
