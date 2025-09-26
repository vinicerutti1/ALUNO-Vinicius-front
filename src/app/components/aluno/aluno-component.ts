import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../services/aluno-service';
import { Aluno } from '../../models/aluno-model';

@Component({
  selector: 'app-aluno',
  standalone: false,
  templateUrl: './aluno-component.html',
  styleUrls: ['./aluno-component.css']
})
export class AlunoComponent implements OnInit {

  alunos: Aluno[] = [];
  alunoForm: Aluno = { nome: '', curso: '', telefone: '' };  // ✅ novo objeto para o formulário
  editando: Aluno | null = null;

  constructor(private service: AlunoService) {}

  ngOnInit(): void {
    this.carregar();
  }

  carregar() {
    this.service.listar().subscribe(dados => this.alunos = dados);
  }

  salvar() {
    if (this.editando) {
      // atualiza o objeto que está sendo editado com os valores do form
      this.editando.nome = this.alunoForm.nome;
      this.editando.curso = this.alunoForm.curso;
      this.editando.telefone = this.alunoForm.telefone;

      this.service.atualizar(this.editando).subscribe(() => {
        this.editando = null;
        this.alunoForm = { nome: '', curso: '', telefone: '' }; // limpa formulário
        this.carregar();
      });
    } else {
      this.service.criar(this.alunoForm).subscribe(() => {
        this.alunoForm = { nome: '', curso: '', telefone: '' }; // limpa formulário
        this.carregar();
      });
    }
  }

  editar(a: Aluno) {
    // preenche o form com os dados do aluno clicado
    this.editando = a;
    this.alunoForm = { ...a };
  }

  deletar(id?: number) {
    if (!id) return;
    this.service.deletar(id).subscribe(() => this.carregar());
  }
}
