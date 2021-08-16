package core

import (
	"fmt"
	corev1 "k8s.io/api/core/v1"
	"sync"
)

type PodMap struct {
	data sync.Map //key ns value []*corev1.Pod
}

func (this *PodMap) Add(pod *corev1.Pod) {
	key := pod.Namespace
	if value, ok := this.data.Load(key); ok {
		value = append(value.([]*corev1.Pod), pod)
		this.data.Store(key, value)
	} else {
		this.data.Store(key, []*corev1.Pod{pod})
	}
}

func (this *PodMap) Delete(pod *corev1.Pod) {
	key := pod.Namespace
	if value, ok := this.data.Load(key); ok {
		for index, p := range value.([]*corev1.Pod) {
			if p.Name == pod.Name {
				value = append(value.([]*corev1.Pod)[0:index], value.([]*corev1.Pod)[index+1:]...)
				this.data.Store(key, value)
				return
			}
		}
	}
}

func (this *PodMap) Update(pod *corev1.Pod) error {
	key := pod.Namespace
	if value, ok := this.data.Load(key); ok {

		for index, p := range value.([]*corev1.Pod) {
			if p.Name == pod.Name {
				value.([]*corev1.Pod)[index] = pod
				this.data.Store(key, value)
				return nil
			}
		}
	}

	return fmt.Errorf("pod-%s not found", pod.Name)
}

func (this *PodMap) ListByNS(ns string) ([]*corev1.Pod, error) {
	if ns != "" {
		if list, ok := this.data.Load(ns); ok {
			return list.([]*corev1.Pod), nil
		}
	}
	return nil, fmt.Errorf("pods not found")
}

func (this *PodMap) ListByRsLabelsAndNS(ns string, rsLabels []map[string]string) ([]*corev1.Pod, error) {
	pods, err := this.ListByNS(ns)
	if err != nil {
		return nil, err
	}
	ret := make([]*corev1.Pod, 0)
	for _, pod := range pods {
		for _, rLabel := range rsLabels {
			if IsValidLabel(pod.Labels, rLabel) {
				ret = append(ret, pod)
			}
		}
	}
	return ret, nil
}