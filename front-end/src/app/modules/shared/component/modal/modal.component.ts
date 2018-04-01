import { Component, OnInit, ViewChild, Input, ComponentFactoryResolver, Type, OnChanges, SimpleChanges } from '@angular/core';
import { ModalContentComponent } from '../../../../common/modal/ModalContentComponent';
import { ModalButtonOptions } from '../../../../common/modal/ModalButtonOptions';
import { IItemDetailComponent } from '../../../../common/component/IItemDetailComponent';
import { ModalContentHostDirective } from '../../../../common/directive/ModalContentHost.directive';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges {
  @Input('ModalId') ModalId: string;
  @Input('ModalTitle') ModalTitle: string;
  @Input('ButtonOptions') ButtonOptions: ModalButtonOptions;
  @Input('ModalContentComponent') ModalContentComponent: ModalContentComponent;
  @ViewChild(ModalContentHostDirective) modalContentHost: ModalContentHostDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.ButtonOptions) {
      this.ButtonOptions = new ModalButtonOptions();
    }

    if (this.ModalContentComponent) {
      const viewContainerRef = this.modalContentHost.viewContainerRef;
      viewContainerRef.clear();
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.ModalContentComponent.component);
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<IItemDetailComponent>componentRef.instance).Bind(this.ModalContentComponent.data, this.ModalContentComponent.componentMode);
    }
  }
}
